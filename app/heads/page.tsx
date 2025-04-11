import React from 'react'
import App_Navbar from '../components/navbar'
import HeadsCards from '../components/HeadsCards'
import { FooterSection } from '../components/footer-section'
import './Heads.css'

const Core = () => {
  const compartments = [
    {
      heading: "Joint Secretary",
      cards: [
        {
          title: "Anureet Kaur Cheema",
          description: "",
          imageUrl: "https://imagizer.imageshack.com/img924/1561/yKutpN.jpg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Robotics",
          description: "",
          imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Terchnical",
      cards: [
        {
          title: "Cultural Shows",
          description: "",
          imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Raghav",
          description: "",
          imageUrl: "https://imagizer.imageshack.com/img924/2076/I2RbV1.jpg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Content",
      cards: [
        {
          title: "Sports Events",
          description: "Participate in various sports competitions and showcase your athletic abilities.",
          imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Gaming Tournament",
          description: "Compete in exciting gaming tournaments featuring popular esports titles.",
          imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Creativity",
      cards: [
        {
          title: "Innovation Hub",
          description: "Showcase your innovative ideas and projects in this creative space.",
          imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Startup Pitch",
          description: "Present your startup ideas to industry experts and investors.",
          imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Tech Expo",
          description: "Explore the latest technological innovations and developments.",
          imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Cultural",
      cards: [
        {
          title: "Art Gallery",
          description: "Admire creative artworks from talented artists across different mediums.",
          imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Photography",
          description: "View stunning photographs capturing moments and stories.",
          imageUrl: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Digital Art",
          description: "Experience modern digital art installations and exhibitions.",
          imageUrl: "https://images.unsplash.com/photo-1519408469771-2586093c3f14?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Design",
      cards: [
        {
          title: "Workshops",
          description: "Learn new skills through interactive workshops led by experts.",
          imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Seminars",
          description: "Attend enlightening seminars on various contemporary topics.",
          imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Media",
      cards: [
        {
          title: "Food Festival",
          description: "Savor diverse cuisines and culinary experiences.",
          imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Fashion Show",
          description: "Witness trendsetting fashion designs and creative expressions.",
          imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Discipline",
      cards: [
        {
          title: "Social Impact",
          description: "Projects and initiatives focused on creating positive social change.",
          imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Green Initiative",
          description: "Environmental awareness and sustainability projects.",
          imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Community Service",
          description: "Engage in community service and volunteer activities.",
          imageUrl: "https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Documentaion",
      cards: [
        {
          title: "Social Impact",
          description: "Projects and initiatives focused on creating positive social change.",
          imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Finance",
      cards: [
        {
          title: "Social Impact",
          description: "Projects and initiatives focused on creating positive social change.",
          imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Green Initiative",
          description: "Environmental awareness and sustainability projects.",
          imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Gurpurab",
      cards: [
        {
          title: "Social Impact",
          description: "Projects and initiatives focused on creating positive social change.",
          imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Green Initiative",
          description: "Environmental awareness and sustainability projects.",
          imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Hospitality",
      cards: [
        {
          title: "Social Impact",
          description: "Projects and initiatives focused on creating positive social change.",
          imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Green Initiative",
          description: "Environmental awareness and sustainability projects.",
          imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Marketing",
      cards: [
        {
          title: "Social Impact",
          description: "Projects and initiatives focused on creating positive social change.",
          imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Green Initiative",
          description: "Environmental awareness and sustainability projects.",
          imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Community Service",
          description: "Engage in community service and volunteer activities.",
          imageUrl: "https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Community Service",
          description: "Engage in community service and volunteer activities.",
          imageUrl: "https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Publicity",
      cards: [
        {
          title: "Social Impact",
          description: "Projects and initiatives focused on creating positive social change.",
          imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
    {
      heading: "Logistics",
      cards: [
        {
          title: "Social Impact",
          description: "Projects and initiatives focused on creating positive social change.",
          imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "Green Initiative",
          description: "Environmental awareness and sustainability projects.",
          imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    }
  ]

  return (
    <>
      <App_Navbar />
      <div className="core-container">
        {compartments.map((compartment, index) => (
          <div key={index} className="compartment">
            <h2 className="compartment-heading">{compartment.heading}</h2>
            <div className="cards-container">
              {compartment.cards.map((card, cardIndex) => (
                <HeadsCards
                  key={cardIndex}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  instagramUrl={card.instagramUrl}
                  linkedinUrl={card.linkedinUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <FooterSection />
    </>
  )
}

export default Core