import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceipesPage } from './receipes.page';

describe('ReceipesPage', () => {
  let component: ReceipesPage;
  let fixture: ComponentFixture<ReceipesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
