import { Layout } from "../../fragments"

const Home = () => {
  return (
    <Layout ban={<div className="banner_principal">
      <h2>Policy</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem dolores officia aliquid, modi aliquam enim placeat illo officiis vitae ipsum?</p>
    </div>
    }>
      <div className="policy_section">
        <h3 className="text-green">policy privacy</h3>
        <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
          We refer to this automatically-collected information as “Device Information”.

          Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number.
          We refer to this information as “Order Information”.When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>
      </div>

      <div className="policy_section">
        <h3>How do we use your personal information?</h3>
        <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
          Additionally, we use this Order Information to:</p>
        <ul className="policy_ul">
          <li>Communicate with you.</li>
          <li>Screen our orders for potential risk or fraud.</li>
          <li>When in line with the preferences you have shared with us.</li>
          <li>provide you with information or advertising relating to our products or services.</li>
        </ul>
        <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site
          (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
      </div>
    </Layout>
  )
}

export default Home