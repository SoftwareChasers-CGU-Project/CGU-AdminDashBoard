import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss'],
})
export class AlbumAddComponent implements OnInit {
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;
  addAlbumForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private albumService: AlbumService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getToday();
    this.imageInfos = this.albumService.getFiles();
    this.addAlbumForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
      createdDate: new FormControl('', Validators.required),
      albumLink: new FormControl('', Validators.required),
    });
    // this.imageInfos = this.albumService.getFiles();
  }

  maxDate: any = '';
  getToday() {
    var date: any = new Date();
    this.maxDate = date.getDate();
  }
  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
          console.log('pushed');
        };
        reader.readAsDataURL(this.selectedFiles[i]);
        console.log(i);
        console.log(this.selectedFiles[i]);
        this.selectedFileNames.push(this.selectedFiles[i].name);
        // console.log(this.selectedFileNames);
      }
    }
  }
  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    console.log(idx);
    const formData: FormData = new FormData();

    formData.append('file', file);
    console.log(formData);
    if (formData) {
      this.albumService.upload(formData).subscribe(
        (event: any) => {
          console.log('event');
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(
              (100 * event.loaded) / event.total
            );
            console.log('if');
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.imageInfos = this.albumService.getFiles();
            console.log('else if');
          }
        },
        (err: any) => {
          console.log('err');
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
          console.log('err');
        }
      );
    }
  }

  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        console.log(i);
        this.upload(i, this.selectedFiles[i]);
        console.log(this.selectedFileNames);
      }
    }
  }

  createNewAlbum() {
    this.albumService.createAlbum(this.addAlbumForm.value).subscribe(
      (data: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Album Created Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('/image-album/list');
      },
      (err: any) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Unable to Create Album',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
