import {
    mount
} from '@vue/test-utils';
import MyNavbar from '@/components/MyNavbar.vue'

// describe("TodoApp.vue", () => {
//     it("should render todo text", () => {
//         const wrapper = mount(TodoApp);

// toContain ile içerip içermediğini test ediyoruz
//         expect(wrapper.textT()).toContain("Learn Vue Testing"); 
//     })
// })



    // Bu ifadeyi 'false' halinde görmek istemiyorum ve bunu test etmek istiyorum.
    // Bunu 'get' ile yapamam çünkü 'false' halinde böyle bir ifadeye rastlayamaz ve error firlatir(DOM'da).
    // Bunun için 'find' ve 'exists' terimlerini kullanacağım.
describe("MyNavbar.vue", () => {

    it("renders a profile link", () => {
        const wrapper = mount(MyNavbar, {
            data() {
                return {
                    isLoggedIn: true,
                }
            }
        });

        const profileLink = wrapper.get("#profile");
        expect(profileLink.text()).toEqual("My Profile");
    });

    it("should not render a profile link", () => {
        const wrapper = mount(MyNavbar, {
            data() {
                return {
                    isLoggedIn: false,
                };
            },
        });

        const profileLink = wrapper.find("#profile");
        expect(profileLink.exists()).toBe(false);

    });


})