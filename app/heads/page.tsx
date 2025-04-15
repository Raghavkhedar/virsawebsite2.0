import React from 'react'
import App_Navbar from '../components/navbar'
import HeadsCards from '../components/HeadsCards'
import TiltedCard from '../components/TiltedCard'
import { FooterSection } from '../components/footer-section'
import './Heads.css'

const Core = () => {
  const compartments = [
    {
      heading: "Gen Secs",
      cards: [
        {
          title: "General Secretary 1",
          description: "",
          imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "General Secretary 2",
          description: "",
          imageUrl: "https://imagizer.imageshack.com/img924/1561/yKutpN.jpg",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        },
        {
          title: "General Secretary 3",
          description: "",
          imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          instagramUrl: "https://instagram.com",
          linkedinUrl: "https://linkedin.com"
        }
      ]
    },
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
    // Rest of the compartments remain unchanged
  ]

  return (
    <>
      <App_Navbar />
      <div className="core-container">
        {compartments.map((compartment, index) => (
          <div key={index} className={`compartment ${index === 0 ? 'gen-secs-compartment' : ''}`}>
            <h2 className="compartment-heading">{compartment.heading}</h2>
            <div className={`cards-container ${index === 0 ? 'gen-secs-cards' : ''}`}>
              {index === 0 ? (
                // Use TiltedCard for Gen Secs
                compartment.cards.map((card, cardIndex) => (
                  <div key={cardIndex} className="relative" style={{ perspective: "800px" }}>
                    <TiltedCard
                      imageSrc={card.imageUrl}
                      altText={card.title}
                      captionText={card.title}
                      containerHeight="400px"
                      containerWidth="300px"
                      imageHeight="400px"
                      imageWidth="300px"
                      showTooltip={false}
                      displayOverlayContent={true}
                      overlayContent={
                        <div className="absolute top-4 left-3 pointer-events-none">
                          <div className="bg-gray-700 bg-opacity-80 text-white px-3 py-1 rounded-br-md text-base font-medium whitespace-nowrap">
                            {card.title}
                          </div>
                        </div>
                      }
                    />
                  </div>
                ))
              ) : (
                // Use HeadsCards for all other sections
                compartment.cards.map((card, cardIndex) => (
                  <HeadsCards
                    key={cardIndex}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    instagramUrl={card.instagramUrl}
                    linkedinUrl={card.linkedinUrl}
                  />
                ))
              )}
            </div>
          </div>
        ))}
      </div>
      <FooterSection />
    </>
  )
}

export default Core