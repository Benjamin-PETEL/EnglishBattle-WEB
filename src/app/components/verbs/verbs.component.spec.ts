import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VerbsComponent } from './verbs.component';
import { VerbService } from 'src/app/services/verb.service';
import { of, throwError } from 'rxjs';

describe('VerbsComponent - Normal case', () => {
  let component: VerbsComponent;
  let fixture: ComponentFixture<VerbsComponent>;
  let mockVerbService: VerbService;
  const response = [{ baseVerbal: 'go', simplePast: 'went', pastParticipe: 'gone' }];

  beforeEach(async () => {
    mockVerbService = jasmine.createSpyObj<VerbService>(
      'verbService',
      {
        getVerbs: of(response),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [VerbsComponent],
      providers: [{ provide: VerbService, useValue: mockVerbService }],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a table', () => {
    const table = fixture.nativeElement.querySelector('table');
    expect(table).not.toBeNull();
  });

  it('should call verbService.getVerbs', () => {
    expect(mockVerbService.getVerbs).toHaveBeenCalled();
  });

  it('should contain a table with a list of verbs', () => {
    const tableRow = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRow).not.toBeNull();
    expect(tableRow.length).toBe(response.length + 1);
    const firstRow = tableRow[1];
    expect(firstRow.cells[0].innerHTML).toBe(response[0].baseVerbal);
    expect(firstRow.cells[1].innerHTML).toBe(response[0].simplePast);
    expect(firstRow.cells[2].innerHTML).toBe(response[0].pastParticipe);
  });

  it('should not display error', () => {
    const error = fixture.nativeElement.querySelector('#error');
    expect(error).toBeNull();
  });

  it('should have an input field', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input).not.toBeNull();
  });

  it('should have a search button', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).not.toBeNull();
  });
});

describe('VerbsComponent - API down case', () => {
  let component: VerbsComponent;
  let fixture: ComponentFixture<VerbsComponent>;
  let mockVerbService: VerbService;

  beforeEach(async () => {
    mockVerbService = jasmine.createSpyObj<VerbService>(
      'verbService',
      {
        getVerbs: throwError('error'),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [VerbsComponent],
      providers: [{ provide: VerbService, useValue: mockVerbService }],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call verbService.getVerbs', () => {
    expect(mockVerbService.getVerbs).toHaveBeenCalled();
  });

  it('should display error', () => {
    const error = fixture.nativeElement.querySelector('#error');
    expect(error).not.toBeNull();
  });

  it('should not display table', () => {
    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeNull();
  });
});