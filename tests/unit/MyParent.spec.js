import {
    shallowMount
} from '@vue/test-utils'
import Parent from '@/components/MyParent.vue'


describe("Parent.vue", () => {
    it("", () => {
        const wrapper = shallowMount(Parent);
        // mount yaptık ve oldu, bu bir hata döndürmez fakat bu component'in child'ı için geçerli mi ?
        // expect(wrapper.text()).toContain("Parent");

        // Mount ile yaptık ve component'in child'ını da geçerli kıldı ve çalıştı.
        expect(wrapper.text()).toContain("Child");

        // Fakat bazı durumlarda child component'i hariç parent component'inin varlığını sorgularız.
        // Bu tür durumlarda : shallowMount
    })
})