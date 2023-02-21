import {
    mount
} from '@vue/test-utils';
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

    let wrapper;

    // Normalde her test işleminde wrapper'ı tanıtmamız gerekiyor ve büyük bir projede oldukça yer kaplıyor.
    // beforeEach sayesinde kod fazlalığından(redundancy) kurtulmuş oluyoruz ve test işleminde tanımlamış oluyoruz.
    beforeEach(() => {
        wrapper = mount(TodoApp);
    })

    it("should render todo text", () => {
        // const wrapper = mount(TodoApp);

        // get --> get html html elements inside of our view components
        const todo = wrapper.get('[data-test="todo"]');

        // toBe ile aynı şekilde olup olmadığını kontrol ediyoruz.
        expect(todo.text()).toBe("Learn Vue Testing");
    });

    // Bu koşulu asenkron yapmak zorundaydık, aksi taktirde hata vericektir.
    it("should add new Todo", async () => {
        // const wrapper = mount(TodoApp);
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

        await wrapper.get('[data-test="new-todo"]').setValue("New Todo");
        await wrapper.get('[data-test="form"]').trigger("submit");

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
    });

    it("should able to be complete todo", async () => {
        // const wrapper = mount(TodoApp);

        await wrapper.get('[data-test="todo-checkbox"]').setValue(true);
        expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");

    })


})