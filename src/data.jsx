export const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        id: "snake-plant",
        name: "Snake Plant",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5f47?auto=format&fit=crop&w=800&q=80",
        description: "A hardy plant that thrives with minimal care and filters indoor air.",
      },
      {
        id: "areca-palm",
        name: "Areca Palm",
        price: 26,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
        description: "A feathery palm that brings a breezy tropical look to bright rooms.",
      },
      {
        id: "peace-lily",
        name: "Peace Lily",
        price: 24,
        image:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
        description: "Elegant white blooms paired with glossy leaves and strong air-cleaning value.",
      },
      {
        id: "rubber-plant",
        name: "Rubber Plant",
        price: 29,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
        description: "Bold foliage and upright growth make this a striking indoor statement piece.",
      },
      {
        id: "dracaena",
        name: "Dracaena",
        price: 22,
        image:
          "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80",
        description: "Slender leaves and easy maintenance make it ideal for home offices.",
      },
      {
        id: "bamboo-palm",
        name: "Bamboo Palm",
        price: 31,
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
        description: "A soft, layered palm that helps create a lush indoor corner.",
      },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      {
        id: "zz-plant",
        name: "ZZ Plant",
        price: 21,
        image:
          "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=800&q=80",
        description: "Nearly indestructible with glossy leaves that handle low light well.",
      },
      {
        id: "pothos",
        name: "Golden Pothos",
        price: 15,
        image:
          "https://images.unsplash.com/photo-1611485988300-b7530d4f9ef5?auto=format&fit=crop&w=800&q=80",
        description: "Trailing vines and marbled leaves make it a forgiving favorite.",
      },
      {
        id: "jade-plant",
        name: "Jade Plant",
        price: 17,
        image:
          "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=800&q=80",
        description: "A compact succulent with thick leaves that stores water efficiently.",
      },
      {
        id: "aloe-vera",
        name: "Aloe Vera",
        price: 14,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=800&q=80",
        description: "Useful, resilient, and perfect for sunny windowsills.",
      },
      {
        id: "cast-iron",
        name: "Cast Iron Plant",
        price: 23,
        image:
          "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80",
        description: "Lives up to its name with excellent tolerance for neglect.",
      },
      {
        id: "haworthia",
        name: "Haworthia",
        price: 13,
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
        description: "A small striped succulent that is ideal for desks and shelves.",
      },
    ],
  },
  {
    category: "Pet Friendly Plants",
    plants: [
      {
        id: "calathea",
        name: "Calathea",
        price: 27,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
        description: "Decorative patterned leaves that move with daylight changes.",
      },
      {
        id: "parlor-palm",
        name: "Parlor Palm",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80",
        description: "Graceful and compact, well-suited for cozy indoor spaces.",
      },
      {
        id: "spider-plant",
        name: "Spider Plant",
        price: 16,
        image:
          "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?auto=format&fit=crop&w=800&q=80",
        description: "A classic hanging plant that produces cheerful baby offshoots.",
      },
      {
        id: "orchid",
        name: "Phalaenopsis Orchid",
        price: 32,
        image:
          "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
        description: "Long-lasting blooms add color and polish to any room.",
      },
      {
        id: "boston-fern",
        name: "Boston Fern",
        price: 19,
        image:
          "https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=800&q=80",
        description: "A soft, full fern that loves humidity and bright indirect light.",
      },
      {
        id: "friendship-plant",
        name: "Friendship Plant",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80",
        description: "Textured leaves and compact growth make it an easy giftable plant.",
      },
    ],
  },
];

export const allPlants = plantCategories.flatMap((group) => group.plants);

