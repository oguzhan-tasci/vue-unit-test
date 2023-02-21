import {mount} from '@vue/test-utils';
import TodoApp from '@/components/TodoApp.vue'

// describe("TodoApp.vue", () => {
//     it("should render todo text", () => {
//         const wrapper = mount(TodoApp);

// toContain ile içerip içermediğini test ediyoruz
//         expect(wrapper.textT()).toContain("Learn Vue Testing"); 
//     })
// })


//
describe("TodoApp.vue", () => {
    it("should render todo text", () => {
        const wrapper = mount(TodoApp);

        // get --> get html html elements inside of our view components
        const todo = wrapper.get('[data-test="todo"]');
        
        // toBe ile aynı şekilde olup olmadığını kontrol ediyoruz.
        expect(todo.text()).toBe("Learn Vue Testing"); 
    })
})
