import "./Ninjabox.css";

const Ninjabuffet = () => {
  return (
    <div className="key-div">
      <h4 style={{ textAlign: "center" }}>NinjaBuffet - Key Details </h4>

      <hr
        style={{
          border: "1px solid black",
          borderStyle: "none none solid",
          width: "70%",
        }}
      />
      <p>
        Once you book the order, someone from the team will call π€πΌ to confirm
        all your details during business hours 10:00AM to 8:00 PM and
        accommodate any changes.
        <br />
        <br />
        π― Donβt worry, we do 100s of events daily, we have got you covered{" "}
        <br />
        π Together we will make it a successful event. <br />
      </p>
      <br />
      <h6>What Quantity will come?</h6>
      <p>
        β Each Starter will be 2 pcs per person <br />
        β You can add more starters after booking <br />
        β Main course & Dessert sent in sufficient quantity
        <br />
        β Donβt worry, we ensure your food doesnβt fall short
        <br />
        β However, if you want extra food, speak to a Ninja
        <br />
      </p>
      <br />
      <h6>What all is included in NinjaBuffet?</h6>
      <p>
        β We send premium bio-degradable plates & cutlery
        <br />
        β Service Staff does the Setup and Clean-up
        <br />
        β Food Warmers with chaffing dishes <br />
        β Tables to be provided by the host <br />
        β Setup doable on Dining Tables, Any Table, Kitchen Top <br />
      </p>
      <br />
      <h6>Any other T&Cs?</h6>
      <p>
        β Service Time is 3.5 hours from service start time
        <br />
        β Additional hours @ 600/- per person per hour <br />
        β Transportation is free up to 10KMs <br />
        β No Messy Kitchen or cleaning hassle for you <br />
        β Food comes pre-cooked from our kitchen <br />
        β Food is served hot in food warmers <br />
        β Bar services available on request <br />
      </p>
    </div>
  );
};

export default Ninjabuffet;
