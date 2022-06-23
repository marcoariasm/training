import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a task in the list', () => {

    let list: { task: string; complete: boolean }[] = [];
    component.crearTarea()
    list = component.list;

    expect(list).not.toBe([]);
  });

  it('should delete a task from the list', () => {

    let list: { task: string, complete: boolean }[] = [
      {
        task: 'pasear al perro',
        complete: true
      },
      {
        task: 'ver TV',
        complete: false
      },
      {
        task: 'estudiar inglés',
        complete: true
      }
    ];
    component.list = [...list];
    component.borrarTarea(2)
    console.log(component);
    
    let nTareas: number = component.list.length;
    
    expect( nTareas ).toBe(list.length - 1);
    
  });

  it('should mark a task as complete', () => {
    let list: { task: string, complete: boolean }[] = [
      {
        task: 'pasear al perro',
        complete: true
      },
      {
        task: 'ver TV',
        complete: false
      },
      {
        task: 'estudiar inglés',
        complete: true
      }
    ];
    component.list = [...list];
    component.marcarCompletado(1, {target:{checked: true}});

    expect( component.list[1].complete ).toBeTruthy();
    
  });

  
});
