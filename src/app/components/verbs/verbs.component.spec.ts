import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VerbsComponent } from './verbs.component';
import { VerbService } from 'src/app/services/verb.service';
import { of, throwError } from 'rxjs';

describe('VerbsComponent', () => {

  let component: VerbsComponent;
  let fixture: ComponentFixture<VerbsComponent>;
  let mockVerbService: VerbService;

  describe('Init Component - Normal case', () => {

    const response = [
      { baseVerbal: 'go', simplePast: 'went', pastParticipe: 'gone' },
      { baseVerbal: 'come', simplePast: 'came', pastParticipe: 'came' },
      { baseVerbal: 'become', simplePast: 'became', pastParticipe: 'became' }
    ];
  
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
      const tbody = fixture.nativeElement.querySelector('tbody');
      const tableRow = tbody.querySelectorAll('tr');
      expect(tableRow).not.toBeNull();
      expect(tableRow.length).toBe(3);
      const firstRow = tableRow[0];
      expect(firstRow.cells[0].innerHTML).toBe(response[0].baseVerbal);
      expect(firstRow.cells[1].innerHTML).toBe(response[0].simplePast);
      expect(firstRow.cells[2].innerHTML).toBe(response[0].pastParticipe);
    });
  
    it('should not display error', () => {
      const error = fixture.nativeElement.querySelector('#error');
      expect(error).toBeNull();
    });
  });
  
  describe('Init Component - API down case', () => {
  
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

  describe('Search Verb', () => {
    const response = [
      { baseVerbal: 'go', simplePast: 'went', pastParticipe: 'gone' },
      { baseVerbal: 'come', simplePast: 'came', pastParticipe: 'came' },
      { baseVerbal: 'become', simplePast: 'became', pastParticipe: 'became' }
    ];
  
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
  
    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('should have a search bar', () => {
      const input = fixture.nativeElement.querySelector('#verbSearchBar');
      expect(input).not.toBeNull();
    });
  
    it('should have a search button', () => {
      const button = fixture.nativeElement.querySelector('#verbSearchButton');
      expect(button).not.toBeNull();
    });

    it('should call searchVerb', fakeAsync(() => {
      spyOn(component, 'searchVerb' as never);
      const input = fixture.nativeElement.querySelector('#verbSearchBar');
      input.value = 'come';
      input.dispatchEvent(new KeyboardEvent('keyup'));
      fixture.detectChanges();

      expect(component.searchVerb).toHaveBeenCalled();
      expect(component.searchVerb).toHaveBeenCalledWith('come');
    }));

    it('should display the searched verb', () => {
      const input = fixture.nativeElement.querySelector('#verbSearchBar');
      input.value = 'cam';
      input.dispatchEvent(new KeyboardEvent('keyup'));
      fixture.detectChanges();

      const tbody = fixture.nativeElement.querySelector('tbody');
      const tableRow = tbody.querySelectorAll('tr');
      expect(tableRow).not.toBeNull();
      expect(tableRow.length).toBe(2);
      const firstRow = tableRow[0];
      expect(firstRow.cells[0].innerHTML).toBe('come');
      expect(firstRow.cells[1].innerHTML).toBe('came');
      expect(firstRow.cells[2].innerHTML).toBe('came');
    });
  });
});