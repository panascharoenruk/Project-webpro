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

          <div class="field has-addons is-pulled-right"></div>
        </h1>
        <div class="divider is-info" style="color: #123c69">Latest Book</div>
      </section>

      <div class="container is-max-widescreen">
        <div class="is-multiline columns is-variable is-2">
          <div
            class="column is-one-quarter"
            v-for="(value, index) in Book_list"
            :key="value.id"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-1by1">
                  <img :src="value.image" alt="Placeholder image" />
                </figure>
              </div>

              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4" style="color: #edc7b7">
                      {{ value.Book_name }}
                    </p>
                    <p class="subtitle is-6" style="color: #bab2b5">
                      By {{ value.Pen_name }}
                    </p>
                    <p style="color: #edc7b7">type</p>
                    <div class="subtitle is-6" style="color: #bab2b5">
                      <p v-for="(value, index) in value.Book_type" :key="index">
                        {{ value }}
                      </p>
                    </div>
                    <p style="color: #edc7b7">
                      <span class="material-icons" style="color: #123c69"
                        >&#xea19;
                        <button
                          class="button is-white"
                          style="color: #edc7b7"
                          @click="showderail(index)"
                        >
                          รายละเอียดหนังสือ
                        </button>
                      </span>
                    </p>
                    <div class="column is-5 is-offset-6 mt-3">
                      <button class="button is-light" style="color: #123c69">
                        {{ value.price }} ฿
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal" :class="{ 'is-active': showdetailbook }">
    <div class="modal-background"></div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="showdetailbook = false"
    ></button>
    <div class="modal-card">
      <figure class="image is-3by2">
        <img :src="Book_list[book_numdetail].image" alt="Placeholder image" />
      </figure>
      <section class="modal-card-body">
        <p style="text-align: center">
          {{ Book_list[book_numdetail].Book_name }}
        </p>
        <br />
        <p>เนื้อเรื่องย่อ</p>
        {{ Book_list[book_numdetail].detail_book }}
        <br />
        <br />
        <p>เขียนโดย</p>
        {{ Book_list[book_numdetail].Pen_name }}
        <br />
        <br />
        <p>แนวหนังสือ</p>
        <p
          v-for="(value, index) in Book_list[book_numdetail].Book_type"
          :key="index"
        >
          {{ value }}
        </p>
      </section>

      <footer class="modal-card-foot">
        <button class="button" @click="showdetailbook = false">ออก</button>
      </footer>
    </div>
  </div>

  <div class="columns"></div>
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
          Book_name:
            "This Is the Memory Until the Girl Who Said “Please Be My Friend Forever,” Is No Longer My Friend ",
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
            "https://images.unsplash.com/photo-1601593346740-925612772716?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
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
  methods: {
    showderail(book_num) {
      this.showdetailbook = true;
      this.book_numdetail = book_num;
    },
  },
});
</script>
<style>
@import "~@creativebulma/bulma-divider";
</style>
    