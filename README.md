<a name="readme-top"></a>

<div align="center">
    <img src="public/tesla-red-logo.png" alt="" width="170"  height="auto" />
    <h2><b>Tesla | Book a Ride App</b></h2>
</div>

---

<!-- ! TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [📊 Kanban](#kanban-board)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
- [⚙️ Setting Up Environment Variables](#env-setup)
- [🖥️ Backend Integration](#backend-integration)
  - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

---

<!-- ! PROJECT DESCRIPTION -->

# 📖 Tesla | Book a Ride App <a name="about-project"></a>

**Tesla | Book a Ride App** Team (4): is a project developed by Front-end [Arturo Emanuel Guerra Iturres](https://www.linkedin.com/in/arturoemanuelguerraiturres/), [Mahammad Mostafa](https://www.linkedin.com/in/mahammad-mostafa/), and Back-end [Demes Ameneshoa](https://www.linkedin.com/in/demesameneshoa/) and [Fatema Nazari](https://www.linkedin.com/in/fatemanazari/).

> Book your ideal Tesla model effortlessly with our new
> Tesla vehicle booking app! Enjoy daily rates on our five available models,
> available in cities worldwide. Experience the best service in the industry.

- **Back-end repository:** [Tesla | Book a Ride App - Back-end](https://github.com/mahammad-mostafa/tesla-booking-back-end).

---

#### Learning objectives

- Apply technical knowledge and skills gained in previous modules in a complex project.
- Understand pros and cons of different approaches of connecting Ruby on Rails back-end with React front-end.
- Understand principles of Ruby on Rails and React frameworks.
- Apply JavaScript best practices and language style guides in code.
- Apply React best practices and language style guides in code.
- Learn about and practice giving constructive feedback to teammates.
- Perform a code reviews for a team member.
- Use the "Review change"" feature from GitHub.
- Write clear, professional, and respectful review comments for other team members.
- Explain "why" a change is requested when giving a code review.
- Plan a 2+ week project with no interim Microverse-set milestones and submit it on time.
- Apply knowledge of setting working agreements to set group project teams up for success.
- Independently implement best practices for group agreements to improve teamwork in larger group project.
- Demonstrate ability to apply best practices of communication for resolving teamwork challenges.
- Understand that respect is the foundation of strong relationship-building with teammates.
- Show up throughout group projects as a reliable and committed team member who communicates and manages your time effectively.
- Recognize the importance of investing in good working relationships with teammates.
- Understand principles of strong teamwork (being reliable, committed, and consistent) and how to apply them in group projects.
- Recognize the value of making equal contributions to group projects to produce the best outcome.
- Use empty Kanban board to manage tasks with team and own time on the project.

---

<!-- ! Kanban Board -->

### 📊 Kanban Board <a name="kanban-board"></a>

- [Tesla Booking Front-end Kanban Board](https://github.com/users/ITurres/projects/6/views/1)

<details>
  <summary>Click to see the project's Kanban board initial state</summary>
    
![frontend-kanban-initial-state](https://github.com/ITurres/tesla-booking-front-end/assets/100724715/2e2cc352-b84c-49dc-b950-475837d2399c)

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li>
      <img src="https://skillicons.dev/icons?i=react"/>
      <a href="https://react.dev/">React.js</a>
    </li>
    <li>
      <img src="https://skillicons.dev/icons?i=redux"/>
      <a href="https://redux.js.org/">Redux</a>
    </li>
    <li>
      <img src="https://skillicons.dev/icons?i=js"/>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>
    </li>
    <li>
      <img src="https://skillicons.dev/icons?i=sass"/>
      <a href="https://sass-lang.com/">SASS</a>
    </li>
    <li>
      <img src="https://skillicons.dev/icons?i=html"/>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
    </li>
  </ul>

---

<!-- ! ENV SETUP -->

# ⚙️ Setting Up Environment Variables <a name="env-setup"></a>

In order to run this project, you'll need to set up your environment variables. We've provided a `.env_sample` file that you can use as a template. Follow these steps to configure your environment variables:

1. **Create a Copy of `.env_sample`**

   - Duplicate the `.env_sample` file and rename it to `.env`.

2. **Replace Placeholder Values**

   - Open the `.env` file in a text editor.
   - Replace the placeholder values (e.g., `YOUR_API_BASE_URL`, `YOUR_API_SIGNUP_ENDPOINT`, etc.) with your actual API details.

3. **Save the Changes**

   - Save the changes to the `.env` file.

4. **Usage in the Project**
   - The project will now automatically pick up the environment variables from the `.env` file during runtime.

### Important Notes:

- **Security:** Keep your `.env` file secure and never expose it publicly, as it may contain sensitive information.
- **Git Ignored:** Ensure that the `.env` file is listed in your `.gitignore` to prevent accidental commits of sensitive information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ! BACKEND INTEGRATION -->

# 🖥️ Backend Integration <a name="backend-integration"></a>

This project relies on a backend service to fetch and handle data. To ensure the project functions correctly, it's crucial to have a working backend with the corresponding API keys. If you don't have a backend set up yet, follow these steps:

1. **Set Up Backend:**

   - Create or use an existing backend service, e.g [our Tesla Booking backend - repo](https://github.com/mahammad-mostafa/tesla-booking-back-end) | [Tesla Booking API-documentation](https://tesla-booking-api-x2xe.onrender.com/api-docs/index.html) that supports the functionalities specified in the API endpoints provided in the `.env` file.

2. **Replace API Endpoints:**

   - Ensure that the API endpoints in the `.env` file match the corresponding routes and functionality in your backend.

3. **Environment Variables:**

   - Make sure that the environment variables set in the `.env` file are configured in your backend environment.

4. **Run Backend:**
   - Start your backend service to handle API requests from the frontend.

### Note:

- **Backend Requirement:** This project requires a backend to fully operate. Ensure that your backend is configured correctly with the provided API keys for seamless integration.

Feel free to reach out if you encounter any issues or need further assistance with the setup.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ! Features -->

### Key Features <a name="key-features"></a>

- Register with name, email, and password.
- Log in with email and password.
- View the latest models of Tesla vehicles.
- Book a ride for a Tesla vehicle.
- View the details of the vehicle.
- View the details of the reservation.
- Add a new vehicle to the database.
- Delete its own vehicles from the database.
- Responsive design for all devices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ! LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://iturres.github.io/tesla-booking-front-end/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ! GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

### Setup

Clone this repository to your desired folder:

Example commands:

- With SSH:

```bash
  cd my-folder
  git clone git@github.com:ITurres/tesla-booking-front-end.git
```

- With HTTPS:

```bash
  cd my-folder
  git clone https://github.com/ITurres/tesla-booking-front-end.git
```

- With GitHub CLI:

```bash
  cd my-folder
  gh repo clone ITurres/tesla-booking-front-end
```

### Install

Install this project's dependencies with:

```bash
  npm install
```

### Usage

To run the project, execute the following command:

```bash
 npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Run Linters

#### ESLint

```bash
  npx eslint "**/*.{js,jsx}"
```

#### Stylelint

```bash
  npx stylelint "**/*.{css,scss}"
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ! AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Arthur Iturres**

- GitHub: [@ITurres](https://github.com/ITurres)
- LinkedIn: [Arthur Emanuel G. Iturres](https://www.linkedin.com/in/arturoemanuelguerraiturres/)
- Angellist / Wellfound: [Arturo (Arthur) Emanuel Guerra Iturres](https://wellfound.com/u/arturo-arthur-emanuel-guerra-iturres)
- Youtube: [Arturo Emanuel Guerra Iturres - Youtube Channel](https://www.youtube.com/channel/UC6GFUFHOtBS9mOuI8EJ6q4g)
- Portfolio: [Arthur Iturres - Portfolio](https://iturres.github.io/iturres-reactive-portfolio/)

👤 **Mahammad Mostafa**

- [GitHub](https://github.com/mahammad-mostafa)
- [Twitter](https://twitter.com/mahammad_mostfa)
- [LinkedIn](https://linkedin.com/in/mahammad-mostafa)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ! FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Test the app with Jest and React Testing Library.**
- [ ] **Address all the inner issues left at the final-touches issue.**
- [ ] **Dark mode.**
- [ ] **Option to Delete reservations**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ! CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ITurres/tesla-booking-front-end/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ! SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

Give a ⭐ if you liked this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ! ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- We the team would like to thank each other for the hard work and dedication to this project.
- Original [design](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign) idea by [Murat Korkmaz](https://www.behance.net/muratk).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ! LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
