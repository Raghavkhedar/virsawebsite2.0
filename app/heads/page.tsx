import React from 'react'
import App_Navbar from '../components/navbar'
import CoreCards from '../components/CoreCards'
import './core.css'

const Core = () => {
  const compartments = [
    {
      heading: "H1",
      cards: [
        {
          title: "Technical Events",
          description: "Explore cutting-edge technical competitions and workshops designed to challenge your engineering prowess.",
          imageUrl: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3"
        },
        {
          title: "Robotics",
          description: "Dive into the world of robotics with hands-on experiences in building and programming robots.",
          imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3"
        },
        {
          title: "Coding Challenges",
          description: "Test your programming skills in competitive coding challenges and hackathons.",
          imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3"
        }
      ]
    },
    {
      heading: "H2",
      cards: [
        {
          title: "Cultural Shows",
          description: "Experience vibrant performances showcasing diverse cultural traditions and artistic expressions.",
          imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3"
        },
        {
          title: "Dance Competition",
          description: "Witness spectacular dance performances across various styles and forms.",
          imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3"
        },
        {
          title: "Music Festival",
          description: "Enjoy live music performances ranging from classical to contemporary genres.",
          imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3"
        }
      ]
    },
    {
      heading: "H3",
      cards: [
        {
          title: "Sports Events",
          description: "Participate in various sports competitions and showcase your athletic abilities.",
          imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3"
        },
        {
          title: "Gaming Tournament",
          description: "Compete in exciting gaming tournaments featuring popular esports titles.",
          imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3"
        },
        {
          title: "Adventure Sports",
          description: "Experience thrilling adventure sports and outdoor activities.",
          imageUrl: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3"
        }
      ]
    },
    {
      heading: "H4",
      cards: [
        {
          title: "Innovation Hub",
          description: "Showcase your innovative ideas and projects in this creative space.",
          imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3"
        },
        {
          title: "Startup Pitch",
          description: "Present your startup ideas to industry experts and investors.",
          imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3"
        },
        {
          title: "Tech Expo",
          description: "Explore the latest technological innovations and developments.",
          imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3"
        }
      ]
    },
    {
      heading: "H5",
      cards: [
        {
          title: "Art Gallery",
          description: "Admire creative artworks from talented artists across different mediums.",
          imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3"
        },
        {
          title: "Photography",
          description: "View stunning photographs capturing moments and stories.",
          imageUrl: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3"
        },
        {
          title: "Digital Art",
          description: "Experience modern digital art installations and exhibitions.",
          imageUrl: "https://images.unsplash.com/photo-1519408469771-2586093c3f14?ixlib=rb-4.0.3"
        }
      ]
    },
    {
      heading: "H6",
      cards: [
        {
          title: "Workshops",
          description: "Learn new skills through interactive workshops led by experts.",
          imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3"
        },
        {
          title: "Seminars",
          description: "Attend enlightening seminars on various contemporary topics.",
          imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3"
        },
        {
          title: "Panel Discussions",
          description: "Engage in thought-provoking discussions with industry leaders.",
          imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3"
        }
      ]
    },
    {
      heading: "H7",
      cards: [
        {
          title: "Food Festival",
          description: "Savor diverse cuisines and culinary experiences.",
          imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3"
        },
        {
          title: "Fashion Show",
          description: "Witness trendsetting fashion designs and creative expressions.",
          imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3"
        },
        {
          title: "Cultural Exchange",
          description: "Experience diverse cultural traditions and international exchanges.",
          imageUrl: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixlib=rb-4.0.3"
        }
      ]
    },
    {
      heading: "H8",
      cards: [
        {
          title: "Social Impact",
          description: "Projects and initiatives focused on creating positive social change.",
          imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3"
        },
        {
          title: "Green Initiative",
          description: "Environmental awareness and sustainability projects.",
          imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3"
        },
        {
          title: "Community Service",
          description: "Engage in community service and volunteer activities.",
          imageUrl: "https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?ixlib=rb-4.0.3"
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
                <CoreCards
                  key={cardIndex}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Core