import React, { useEffect, useState } from "react";
import "./Blog.css";
import BlogContentCard from "./BlogContentCard";
import waterProofingBanner from "./../../Images/BlogImgs/WaterProofingBlog/Banner.png";
import howLongBanner from "./../../Images/BlogImgs/How_Long_to_Build/Banner.png";
import brickMansoryBanner from "./../../Images/BlogImgs/Brick_Masonry/Banner.png";
import trendingWindowDoorBanner from "./../../Images/BlogImgs/Trending Window and Door/Banner.png";
import essentialVastuBanner from "./../../Images/BlogImgs/EssentialVastuBanner.png";
import kitchenHallDesignBanner from "./../../Images/BlogImgs/Modern Kitchen and Hall Design/Banner.png";
import falseCeilingBanner from "./../../Images/BlogImgs/False_ceiling/Banner.png";
import pccConcretingBanner from "./../../Images/BlogImgs/PccConcreting/Banner.png";
import duplexHouseBanner from "./../../Images/BlogImgs/Duplex House Construction/Banner.png";
import interiorPaintBanner from "./../../Images/BlogImgs/Trending Interior Paint Colors and Expert Tips/Banner.png";

const BlogContent = () => {
  const blogs = [
    {
      img: waterProofingBanner,
      alt: "waterproofing-materials",
      link: "/top-waterproofing-materials-worth-investing-in-for-your-new-home",
      head: "Top Waterproofing Materials worth Investing In for Your New Home",
      para: "Building a new home is one of the most significant investments you'll ever make, and safeguarding it from damage is essential for maintaining...",
    },
    {
      img: howLongBanner,
      alt: "build-a-30x40",
      link: "/how-long-to-build-a-30x40-feet-house-in-bangalore",
      head: "How Long to Build a 30x40 Feet House in Bangalore?",
      para: "Building a house is one of the most exciting, yet complex, projects anyone can undertake. If you are planning to construct a 30x40 Feet House in Bangalore, it’s essential to...",
    },
    {
      img: brickMansoryBanner,
      alt: "current-types-of-brick",
      link: "/current-types-of-brick-masonry-in-use-today",
      head: "Current Types of Brick Masonry in Use Today",
      para: "Brick masonry for home construction remains one of the most popular and enduring building methods across the globe. With roots tracing back thousands of years, this technique...",
    },
    {
      img: essentialVastuBanner,
      alt: "essentialVastuBanner",
      link: "/essential-vastu-tips-for-building-your-dream-home",
      head: "Essential Vastu Tips for Building Your Dream Home",
      para: "Creating a harmonious living space goes beyond aesthetics. Incorporating principles of Vastu Shastra—a traditional Indian system of architecture and ...",
    },
    {
      img: trendingWindowDoorBanner,
      alt: "trendingWindowDoorBanner",
      link: "/trending-window-and-door-options-for-modern-homes",
      head: "Trending Window and Door Options for Modern Homes: Elevating Style and Functionality",
      para: "In contemporary home design, windows and doors are far more than structural elements; they define the character, enhance energy efficiency, and...",
    },
    {
      img: kitchenHallDesignBanner,
      alt: "kitchenHallDesignBanner",
      link: "/modern-kitchen-and-hall-design-ideas-for-your-home",
      head: "Modern Kitchen and Hall Design Ideas for Your Home",
      para: "When it comes to designing your home, the kitchen and hall are two spaces that hold significant importance. The kitchen is the heart of the home, where ...",
    },
    {
      img: falseCeilingBanner,
      alt: "false Ceiling Banner",
      link: "/everything-you-need-to-know-about-false-ceiling-costs-in-bangalore",
      head: "Everything You Need to Know About False Ceiling Costs in Bangalore",
      para: "False ceilings, also known as drop ceilings or suspended ceilings, are becoming an integral part of modern interior design in Bangalore. Not only do they enhance...",
    },
    {
      img: pccConcretingBanner,
      alt: "PCC Concreting Banner",
      link: "/building-strong-foundations-with-durable-pcc-concreting-for-your-projects",
      head: "Building Strong Foundations with Durable PCC Concreting for Your Projects",
      para: "When embarking on any construction project, the foundation is the most critical element that determines its strength and...",
    },
    {
      img: duplexHouseBanner,
      alt: "Duplex House Banner",
      link: "/expert-duplex-house-construction-crafting-dreams-for-modern-living",
      head: "Expert Duplex House Construction: Crafting Dreams for Modern Living",
      para: "Building a home is a significant milestone in life, and choosing the right construction style plays a crucial role in defining your ...",
    },
    {
      img: interiorPaintBanner,
      alt: "Interior Paint Colors Banner",
      link: "/trending-interior-paint-colors-and-expert-tips-for-your-home",
      head: "Trending Interior Paint Colors and Expert Tips for Your Home!",
      para: "Choosing the right home interior paint colors can completely transform the look and feel of your space. Whether you're...",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of blogs per page

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get the blogs for the current page
  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const preloadImages = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    blogs.slice(startIndex, endIndex).forEach((blog) => {
      const img = new Image();
      img.src = blog.img;
    });
  };

  useEffect(() => {
    preloadImages(currentPage);
  }, [currentPage]);

  return (
    <div className="blogMainWrapper">
      <div className="blogMainContent">
        {currentBlogs.map((blog, index) => (
          <BlogContentCard
            key={index}
            img={blog.img}
            head={blog.head}
            para={blog.para}
            link={blog.link}
          />
        ))}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pageButton ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {/* Pagination Controls */}
    </div>
  );
};

export default BlogContent;
