export const navList = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/services",
      text: "Services",
    },
    {
      id: 4,
      path: "/rooms",
      text: "Rooms",
    },
    {
      id: 5,
      path: "/page",
      text: "Page",
      subItems: [
        {
          id: 51,
          path: "/booking",
          text: "Booking",
        },
        {
          id: 52,
          path: "/team",
          text: "Our Team",
        },
        {
          id: 53,
          path: "/testimonial",
          text: "Testimonial",
        },
      ],
    },
    {
      id: 6,
      path: "/contact",
      text: "Contact",
    },
  ];
  export const socialIcons = [
    {
      icon: <i className="fab fa-facebook-f"></i>,
    },
    {
      icon: <i className="fab fa-twitter"></i>,
    },
    {
      icon: <i className="fab fa-instagram"></i>,
    },
    {
      icon: <i className="fab fa-linkedin-in"></i>,
    },
    {
      icon: <i className="fab fa-youtube"></i>,
    },
  ];
  
  export const carouselData = [
    {
      img: "../assets/img/carousel-1.jpg",
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
    {
      img: "../assets/img/carousel-2.jpg",
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
  ];
  export const about = [
    {
      icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
      text: "Rooms",
      count: "7861",
    },
    {
      icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
      text: "Staffs",
      count: "1234",
    },
    {
      icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
      text: "Clients",
      count: "4321",
    },
  ];
  
  export const services = [
    {
      icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
      name: "Rooms & Appartment",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
      name: "Food & Restaurant",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      icon: <i class="fa fa-spa fa-2x text-primary"></i>,
      name: "Spa & Fitness",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
  
    {
      icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
      name: "Sports & Gaming",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
      name: "Event & Party",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
  
    {
      icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
      name: "GYM & Yoga",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
  ];
  export const team = [
    {
      image: "../assets/img/team-4.jpg",
      name: "Henry William",
      designation: "Hotel Manager",
    },
    {
      image: "../assets/img/team-2.jpg",
      name: "James Alexander",
      designation: "HR department",
    },
    {
      image: "../assets/img/team-1.jpg",
      name: "Charlie Adam",
      designation: "Event planner",
    },
    {
      image: "../assets/img/team-3.jpg",
      name: "Ezra Jackson",
      designation: "Hotel receptionist",
    },
  ];
  
  export const footerItem = [
    {
      id: 1,
      header: "Company",
      UnitItem: [
        {
          name: "About Us",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Privacy Policy",
        },
        {
          name: "Terms & Condition",
        },
        {
          name: "Support",
        },
      ],
    },
    {
      id: 2,
      header: "Services",
      UnitItem: [
        {
          name: "Food & Restaurant",
        },
        {
          name: "Spa & Fitness",
        },
        {
          name: "Sports & Gaming",
        },
        {
          name: "Event & Party",
        },
        {
          name: "GYM & Yoga",
        },
      ],
    },
  ];
  
  export const footerContact = [
    {
      icon: <i className="fa fa-map-marker-alt me-3"></i>,
      name: "123 Street, New York, USA",
    },
    {
      icon: <i className="fa fa-phone-alt me-3"></i>,
      name: "+012 345 67890",
    },
    {
      icon: <i className="fa fa-envelope me-3"></i>,
      name: "info@example.com",
    },
  ];
  
  export const contact = [
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Booking",
      email: "book@example.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Technical",
      email: "tech@example.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "General",
      email: "info@example.com",
    },
  ];
  export const testimonial = [
    {
      description:
        "Room was large and comfortable. Staff were friendly and helpful and breakfast was good. Location is also good for getting to all the tourist spots.",
      name: "Alice Matthews",
      profession: "Biomedical Engineer",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "../assets/img/testimonial-1.jpg",
    },
    {
      description:
        "Everything was perfect. The staff was helpful, the accomodations were beautiful and the breakfast was superb. It couldn't have been better. Thanks",
      name: "Carlos Franco",
      profession: "Architect",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "../assets/img/testimonial-2.jpg",
    },
    {
      description:
        "We had a lovely stay! Our room was comfy, clean. The receptionist team was very friendly and professional.I would highly recommend this hotel.",
      name: "Saurabh Batra",
      profession: "Actor & Model",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "../assets/img/testimonial-3.jpg",
    },
  ];
  
  export const roomItems = [
    {
     
      img: "../assets/img/junior suite.jpg",
      price: "12k/Night",  
      name: "Junior Suit",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        " Junior Suites usually offer multiple separated spaces: Bathroom, kitchen, bedroom, living area, and sometimes many more. Most suites offer apartment-style living and tend to feel much more like staying apartment than a hotel room.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
  
    {
      
      img:"../assets/img/Executive suite.jpg",
      price: "25k/Night",
      name: "Executive Suite",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Our Executive suites boasts a bedroom complete with a king size bed and a living room.Featuring modern furnishings, complemented by deluxe amenities, generous work area with high-speed wireless Internet access",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
    {
      img: "../assets/img/Super deluxe.jpg",
      price: "87k/Night",
      name: "Super Deluxe",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Our Super Deluxe Rooms have elegant furniture, beautiful lighting, beautiful curtains, wall artwork, world-class bed(s) with clean, beautiful bedding and much more. Besides, the room is well arranged and confortable",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
  ];
  
  export const facility = [
    {
      icon: <i class="fa fa-bed text-primary me-2"></i>,
      quantity: 3,
      facility: "bed",
    },
    {
      icon: <i class="fa fa-bath text-primary me-2"></i>,
      quantity: 2,
      facility: "bath",
    },
    {
      icon: <i class="fa fa-wifi text-primary me-2"></i>,
      facility: "Wifi",
    },
  ];