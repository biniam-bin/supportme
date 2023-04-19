import React, {useState} from "react";
import "./style.css";

function Detail() {
    const coffeePrice = 5;
    const [coffeeAmount, setCoffeeAmount] = useState<any>(5);
  return (
    <div className="detail_container">
      <div className="images">
        <img src="/images/banner.jpg" alt="" className="banner_bg" />
        <div className="profile_img">
          <img src="https://picsum.photos/200/200" alt="" className="profile" />
        </div>
      </div>
      <div className="info">
        <h1>HandyMumLin</h1>
        <p className="desc">is Sewing video maker</p>
        <p className="stats">566 supporters</p>
      </div>
      <div className="line"></div>
      <div className="details_body">
        <div className="left">
          <Block>
            <h2 className="title">
              {" "}
              Learn how to solve problems and build projects with my Free videos
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem corporis perspiciatis animi nisi. Doloremque
              voluptas esse et architecto reiciendis laborum explicabo
              praesentium adipisci, maiores enim suscipit doloribus facere vitae
              facilis, culpa dolore in nisi nulla vero necessitatibus amet
              magnam! Error, sed a. Ipsam eligendi quibusdam quaerat doloribus
              praesentium dolore repellat rerum illum deleniti, dolores quod
              enim. Consequatur itaque nulla fugit magnam. Quaerat vero alias
              fugit deserunt ipsam voluptatem est ipsa iste, dignissimos numquam
              aliquid veritatis quo commodi sequi, laborum dolore totam enim cum
              exercitationem quibusdam repellendus eius? Quaerat reprehenderit
              perspiciatis veritatis! Omnis repudiandae molestias sunt
              laudantium. Vero debitis at qui eum, voluptatum molestias officiis
              saepe doloremque error autem deserunt iure explicabo magnam
              reprehenderit eaque, possimus ullam temporibus numquam nisi
              voluptas unde nesciunt cum provident? Temporibus, eius praesentium
              tenetur quaerat, quasi suscipit accusamus nihil nisi provident
              modi nobis animi aliquid autem dolor sapiente inventore sed fuga
              ipsam illum repudiandae numquam quidem qui? Culpa esse nisi nihil
              voluptatibus aspernatur animi, mollitia alias unde amet enim nulla
              aliquam optio ipsa nam libero expedita tempore fugit veritatis ex?
              Cumque quia adipisci aspernatur minus nam, totam repellendus
              suscipit quidem minima reprehenderit non consectetur in rerum
              nulla, aut laudantium earum eos necessitatibus deserunt
              voluptatum? Reprehenderit rerum aspernatur consequuntur molestiae
              doloremque id eum voluptate animi illo optio, laborum voluptatem
              blanditiis alias harum, eveniet vero accusantium deleniti corrupti
              est fugit ex, dolor sapiente quia. Ullam error provident
              blanditiis quibusdam culpa assumenda quisquam. Dolorem cumque quam
              exercitationem quis eius et maiores voluptates iusto quas
              voluptatibus? Harum aut odit quasi.
            </p>
          </Block>
        </div>
        <div className="right">
          <Block>
            <h2>Buy CodeBeauty a coffee</h2>
            <Block>
              <div className="container">
                <p className="coffee">☕</p>
                <p className="times">x</p>
                <div className="circles_container">
                  <div className={`${coffeeAmount == 3 ? "active_circle": "circle"}`} onClick={e => setCoffeeAmount(3)}>3</div>
                  <div className={`${coffeeAmount == 5 ? "active_circle": "circle"}`} onClick={e => setCoffeeAmount(5)}>5</div>
                  <div className={`${coffeeAmount == 10 ? "active_circle": "circle"}`} onClick={e => setCoffeeAmount(10)}>10</div>
                 
                </div>
                <input type="text" value={coffeeAmount} onChange={e => setCoffeeAmount(e.target.value)}/>
              </div>
            </Block>
            <Block>
              <input type="text" placeholder="Name (optional)" />
            </Block>
            <Block>
              <textarea
                placeholder="Say something nice...(Optional)"
                name=""
                id=""
                cols={30}
                rows={5}
              ></textarea>
            </Block>
            <div className="btn">Support ${coffeePrice * coffeeAmount}</div>
          </Block>
        </div>
      </div>
    </div>
  );
}

const Block = (props: any) => {
  return <div className="block_container">{props.children}</div>;
};

export default Detail;
