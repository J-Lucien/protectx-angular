import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiraidSettingsComponent } from './antiraid-settings.component';

describe('AntiraidSettingsComponent', () => {
  let component: AntiraidSettingsComponent;
  let fixture: ComponentFixture<AntiraidSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntiraidSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiraidSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
