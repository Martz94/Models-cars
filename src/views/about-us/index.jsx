import { Layout } from "../../fragments"
import ImageCar from '../../assets/img_about1.jpg'
import Imagecar2 from '../../assets/img_about2.jpg'

const Home = () => {
  return (
    <Layout ban={<div className="banner_principal">
      <h2>About-us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem dolores officia aliquid, modi aliquam enim placeat illo officiis vitae ipsum?</p>
    </div>}>

      <main className="about_main">
        <h2>Gifts of Grace</h2>
        <div className="about_section">
          <p>"Gifts of Grace" is a phrase often used to refer to acts of kindness, mercy, or blessings bestowed upon someone without expectation of anything in return.
            It conveys the idea of giving something valuable or beneficial to someone as a gesture of goodwill or love.</p>
          <p>The concept of "gifts of grace" is rooted in the notion of grace, which is often associated with divine or spiritual blessings.
            It embodies the idea that these gifts are given freely, without merit or entitlement, and are meant to uplift and bring positivity into someone's life.</p>
        </div>
        <h2>The Art of Gifting</h2>
        <div className="about_section">
          <div className="about_section-b">
            <h3>Let's think new way</h3>
            <p>The art of gifting refers to the practice of giving thoughtful and meaningful gifts to others.
              It involves selecting and presenting presents that reflect the recipient's interests, desires,
              or needs, while also considering the occasion and the relationship between the giver and the recipient.
              The art of gifting goes beyond the mere act of giving an item; it focuses on creating a memorable and
              enjoyable experience for the recipient.</p>
          </div>
          <div>
            <img src={ImageCar} alt="auto1" />
          </div>
        </div>

        <div className="about_section">
          <div>
            <img src={Imagecar2} alt="auto2" />
          </div>
          <div className="about_section-b">
            <h3>Some creative gifts</h3>
            <p>Personalization: A personalized gift holds special meaning and significance.
              It can be customized with the recipient's name, initials, or a heartfelt message.</p>
            <p>Occasion and Meaning: The art of gifting takes into account the occasion for which the gift is given. Whether it's a birthday, anniversary, holiday, or any other significant event, the gift should be meaningful and relevant to the occasion. It can be symbolic, sentimental, or represent a shared experience or memory.
              Quality over Quantity: Rather than focusing on the monetary</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home