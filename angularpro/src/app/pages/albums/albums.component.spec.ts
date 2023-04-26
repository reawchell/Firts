import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { LibrosComponent } from './albums.component';

describe('LibrosComponent', () => {
  let component: LibrosComponent;
  let fixture: ComponentFixture<LibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosComponent);
=======
import { AlbumsComponent } from './albums.component';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsComponent);
>>>>>>> 6365fe8d0433962997a662b326cfad36d20fe134
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
