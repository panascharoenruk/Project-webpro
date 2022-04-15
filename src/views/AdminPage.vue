<template >
  <NavbarAdmin />
  <MyCarosel />

  <div class="columns">
    <div class="column mt-4">
      <section class="section" id="section_one">
        <h1>
          <span class="material-icons" style="color: #123c69"
            >&#xe87d; หนังสือที่รอการยืนยันลงขาย
          </span>

          <div class="field has-addons is-pulled-right" style="color: #123c69">
            คำขอล่าสุด
          </div>
          <div class="divider is-info" style="color: #123c69">Wait Book</div>
        </h1>
      </section>

      <div class="container is-max-desktop">
        <div class="is-multiline columns is-variable is-2">
          <div
            class="column is-one-quarter"
            v-for="value in Book_list"
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
              <div class="level-item has-text-centered">
                <button class="button is-light" style="color: #123c69">
                  อ่านเนื้อหาหนังสือ
                </button>
              </div>
              <br />
              <footer class="card-footer">
                <a class="card-footer-item">อนุมัติ</a>
                <a class="card-footer-item">ไม่อนุมัติ</a>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <section class="section" id="section_two">
        <span class="material-icons" style="color: #123c69"
          >&#xe865; หนังสือที่รอการยืนยันการลบ
        </span>

        <div class="field has-addons is-pulled-right">คำขอล่าสุด</div>
        <div class="divider is-info" style="color: #123c69">Wait Book</div>
      </section>

      <div class="container is-max-desktop">
        <div class="is-multiline columns is-variable is-2">
          <div
            class="column is-one-quarter"
            v-for="value in Book_list"
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
              <div class="level-item has-text-centered">
                <button class="button is-light" style="color: #123c69">
                  อ่านเนื้อหาหนังสือ
                </button>
              </div>
              <br />
              <footer class="card-footer">
                <a class="card-footer-item">ยืนยัน</a>
                <a class="card-footer-item">ไม่ยืนยัน </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <section class="section" id="section_three">
        <span class="material-icons" style="color: #123c69"
          >&#xe865; รายละเอียดการเงิน
        </span>

        <div class="divider is-info" style="color: #123c69">
          list of transfers
        </div>
      </section>
      <div class="hero-body">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Image"
                />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small>
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam
                  condimentum luctus turpis.
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item" aria-label="reply">
                    <span class="icon is-small">
                      <i class="fas fa-reply" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a class="level-item" aria-label="retweet">
                    <span class="icon is-small">
                      <i class="fas fa-retweet" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a class="level-item" aria-label="like">
                    <span class="icon is-small">
                      <i class="fas fa-heart" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarAdmin from "@/components/NavbarAdmin";
import MyCarosel from "@/components/MyCarosel";
export default {
  name: "AdminPage",
  components: {
    NavbarAdmin,
    MyCarosel,
  },
  data() {
    return {
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
      ],
    };
  },
};
</script>
<style >
</style>