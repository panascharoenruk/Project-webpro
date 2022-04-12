<template>
  <NavBar />
  <MyCarosel />

  <div class="columns">
    <div class="column mt-4">
      <section class="section">
        <h1>
          <span class="material-icons" style="color: #123c69"
            >&#xe87d; มาใหม่สุด
          </span>

          <div class="field has-addons is-pulled-right">Tag</div>
          <div class="divider is-info" style="color: #123c69">Latest Book</div>
        </h1>
      </section>

      <div class="container is-max-desktop">
        <div class="is-multiline columns is-variable is-2">
          <div
            class="column is-one-quarter"
            v-for="(value, index) in Book_list"
            :key="value.id"
          >
            <div class="card">
              <router-link to="/DetailsBook">
                <div class="card-image">
                  <figure class="image is-1by1">
                    <img :src="value.image" alt="Placeholder image" />
                  </figure>
                </div>

                <div class="card-content" style="height: 160px">
                  <div class="media">
                    <div class="media-content" style="color: #edc7b7">
                      <p
                        class="is-size-6 has-text-centered subtitle"
                        style="color: #edc7b7"
                      >
                        {{ value.Book_name }}
                      </p>

                      <p class="is-size-7" style="color: #bab2b5">
                        By {{ value.Pen_name }}
                      </p>
                      type:

                      <span
                        class="is-size-7 text-right"
                        style="color: #bab2b5"
                        v-for="(value, index) in value.Book_type"
                        :key="index"
                      >
                        {{ value }} &nbsp;
                      </span>
                    </div>
                  </div>
                </div>
              </router-link>
              <div class="level ml-2">
                ฿ {{ value.price }}
                <button
                  class="button is-ghost level-right"
                  @click="cardpush(index)"
                >
                  <i
                    class="fa fa-cart-plus is-size-4"
                    style="color: #edc7b7"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section">
        <h1>
          <span class="material-icons" style="color: #123c69"
            >&#xe865; หนังสือทั้งหมด
          </span>

          <div class="field has-addons is-pulled-right">Tag</div>
        </h1>
        <div class="divider is-info" style="color: #123c69">All Book</div>
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar";
import MyCarosel from "@/components/MyCarosel";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    MyCarosel,
  },
  data() {
    return {
      showdetailbook: false,
      book_numdetail: 0,

      Book_list: [
        {
          id: 0,
          Book_name: "Exorcist wa Otosenai ",
          Pen_name: "Apple",
          price: 100,
          is_favorite: false,
          Book_type: ["comedy", "Romance"],
          image:
            "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/08/princess-connect-redive-season-2-trailer-screenshot.png",
          detail_book:
            " เด็กหนุ่มผู้ถูกรับเลือกจากพระเจ้าให้กลายเป็นเอ็กซอร์ซิสผู้แข็งแกร่งที่สุดซึ่งมีหน้าที่ในการปราบจอมมาร ได้พบเจอกับเด็กสาวผู้หนึ่ง จนเกิดเป็นเรื่องราวแห่งความรักและความหวัง ",
        },
        {
          id: 1,
          Book_name: "This Is the Memory Until the Girl ",
          Pen_name: "Panasonic",
          price: 120,
          is_favorite: false,
          Book_type: ["comedy", "Drama"],
          image:
            "https://skilfulgamer.com/wp-content/uploads/2022/02/genshin-impact-original-art-from-website_11zon-1.jpg",
          detail_book:
            "  เด็กสาวผู้มีปัญหาในการเข้าสังคม ที่ได้พบกับเพื่อนสนิทที่รู้จักกันผ่านทางเกมออนไลน์ จนพัฒนาความสัมพันธ์จนไปเป็นคนรักในที่สุด เรื่องนี้ฟีลกู๊ดล้วนๆครับ ออกแนวความสัมพันธ์พระนาง น่ารักกุ๊กกิ๊ก นางเอกมีปัญหาเรื่องสนทนากับคนทั่วไปแบบโคมิเลย ต้องใช้มือถือช่วยพูด พระเอกเลยมีเวลาโชว์ความสุภาพบุรษ จนความรู้สึกค่อยๆเปลี่ยนไปครับ",
        },
        {
          id: 2,
          Book_name: "Vintage Model Car",
          Pen_name: "Unknow",
          price: 150,
          is_favorite: false,
          Book_type: ["Action", "Romance"],
          image:
            "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          detail_book: "บลาๆ",
        },
        {
          id: 3,
          Book_name: "Case for iPhone 11 Pro",
          Pen_name: "Unknow",
          price: 100,
          is_favorite: true,
          Book_type: ["comedy", "Romance"],
          image:
            "https://cdna.artstation.com/p/assets/images/images/041/717/352/large/u-o-s-a-91946356-p0.jpg?1632486134",
          detail_book: "บลาๆ",
        },
        {
          id: 4,
          Book_name: "Air freshener",
          Pen_name: "Febreze",
          price: 80,
          is_favorite: false,
          Book_type: ["comedy", "action"],
          image:
            "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          detail_book: "บลาๆ",
        },
      ],
    };
  },
  methods: {},
});
</script>
<style>
@import "~@creativebulma/bulma-divider";
</style>
    