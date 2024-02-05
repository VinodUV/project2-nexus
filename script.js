document.addEventListener("DOMContentLoaded", function () {
    // Example services data
    const servicesData = [
        { title: "Custom Software Development", description: "We create tailored software solutions to meet your unique business needs." },
        { title: "Web Application Development", description: "Building responsive and user-friendly web applications for your business." },
        { title: "Mobile App Development", description: "Crafting innovative mobile applications for iOS and Android platforms." },
        { title: "Cloud Solutions", description: "Delivering scalable and secure cloud-based solutions for your business." },
        { title: "UI/UX Design", description: "Designing intuitive and visually appealing user interfaces for your applications." },
    ];

    // Example portfolio data
    const portfolioData = [
        { title: "Project A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Project B", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
    ];

    // Example team members data
    const teamMembersData = [
        { name: "John Doe", role: "CEO" },
        { name: "Jane Smith", role: "Lead Developer" },
    ];

    // Example testimonials data
    const testimonialsData = [
        { name: "John Doe", comment: "Great service! The software exceeded our expectations." },
        { name: "Jane Smith", comment: "Highly recommend this company. They are professional and reliable." },
    ];

    // Function to create a card
    function createCard(title, description, textColor = "#333") {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3 style="color: ${textColor};">${title}</h3>
            <p style="color: ${textColor};">${description}</p>
        `;
        return card;
    }

    // Populate services section with cards
    const servicesCardsContainer = document.getElementById("services-cards");
    servicesData.forEach(service => {
        const card = createCard(service.title, service.description);
        servicesCardsContainer.appendChild(card);
    });

    // Populate portfolio section with cards
    const portfolioCardsContainer = document.getElementById("portfolio-cards");
    portfolioData.forEach(project => {
        const card = createCard(project.title, project.description);
        portfolioCardsContainer.appendChild(card);
    });

    // Populate team section
    const teamCardsContainer = document.getElementById("team-cards");
    teamMembersData.forEach(member => {
        const card = createCard(member.name, member.role);
        teamCardsContainer.appendChild(card);
    });

    // Populate testimonials section
    const testimonialCardsContainer = document.getElementById("testimonial-cards");
    testimonialsData.forEach(details => {
        const card = createCard(details.name, details.comment);
        testimonialCardsContainer.appendChild(card);
    });
});
