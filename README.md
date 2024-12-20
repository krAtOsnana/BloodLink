# BloodLink

**BloodLink** is a modern blood donation platform designed to connect donors and recipients seamlessly. Built as a JSM Hackathon project, the app focuses on enhancing development skills while addressing real-world needs in the blood donation process. The platform enables users to register, search for nearby donors or recipients, and manage notifications efficiently.

## Why BloodLink?

Blood donation is a critical aspect of healthcare, yet finding donors or recipients in urgent situations often becomes challenging. BloodLink bridges this gap by providing a platform where donors and recipients can connect efficiently and effectively. By simplifying the process of finding nearby donors or responding to urgent requests, the app aims to save lives and reduce the logistical challenges associated with blood donation.
## Addressing Real-Life Challenges

In situations where immediate access to blood is crucial—such as during surgeries like Coronary Artery Bypass Grafting (CABG), cancer, kidney transplant, —the need for a system like BloodLink becomes evident.
While the hospital's blood bank had the necessary blood, they required it to be replenished with the same amount of donated blood before releasing it. Patients often face the daunting task of finding multiple donors on short notice, which can lead to delays in critical medical procedures. By leveraging technology, BloodLink aims to alleviate these pressures and ensure timely access to necessary blood supplies.
 

---

## Features

### 1. **Donor Registration**
- **User-Friendly Form**: Allows donors to sign up by providing key details like name, age, blood group, and contact information.
- **Location Integration**: Includes a "Use My Current Location" feature to autofill the address field for convenience.

### 2. **Donor Dashboard**
The dashboard is divided into several sections:
- **Dashboard**: Displays an overview of the donor's information and activity.
- **Blood Request**: Lists recipient requests with key attributes like the "Date of Need" and whether the request is for a family member or friend.
- **Donation History**: Displays a record of past donations (currently a pseudo-component).
- **Settings**: Allows donors to manage their preferences (pseudo-component).
- **Schedule Donation**: Enables donors to plan upcoming donations (pseudo-component).


https://github.com/user-attachments/assets/9c733d88-3fb0-41fa-adef-1d32a6dcdca2


### 3. **Recipient registration**
- **User-Friendly Form**: Allows recipient to sign up by providing key details like name, email, phoneNumber, address, postalcode, dropBox to upload transfusion request document
- **Location Integration**: Includes a "Use My Current Location" feature to autofill the address field for convenience.
- 
### 4. **Recipient Dashboard**
The dashboard is divided into several sections:
- **Dashboard**: Displays an overview of the recipient's information and activity.
- **Donor's list**: Lists donor's requests with key attributes like the "Blood group" and "notify button" .
- **Request status**: Displays a record of past request status (currently a pseudo-component).
- **Settings**: Allows donors to manage their preferences (pseudo-component).

https://github.com/user-attachments/assets/c6ddc450-f93d-4d06-8529-665735f6d593

### 4. **Notification System**
- **Twilio Integration**: Donors can send WhatsApp notifications to recipients directly from the app (development environment only).
- **Toast Notifications**: Confirms successful notifications to the donor.

<!-- ### 5. **Location-Based Search**
- **Nearby Users**: Enables registered users to find nearby donors or recipients based on location.
- **Postal Code Sorting/Searching**: Planned feature for enhanced search capabilities. -->

---

## Tech Stack




- **Frontend**: Next.js, shadcn library.
- **Backend**: Next.js.
- **Database**: Appwrite.
- **Notifications**: Twilio (WhatsApp integration).

---

## Project Goals

- **Hackathon Showcase**: Build a practical, real-world application for the JSM Hackathon.
- **Skill Development**: Enhance development skills with a focus on modern technologies.
  

---

## Future Plans

1. Migrate the database from Appwrite to PostgreSQL for better scalability and relational data handling.
2. Implement full functionality for the **Donation History**, **Schedule Donation**, and **Settings** components.
3. Add a fully functional postal code-based search and sorting system.
4. Optimize and deploy the app to production.

---

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/bloodlink.git
   cd bloodlink
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```env
     TWILIO_SID=your_twilio_sid
     TWILIO_AUTH_TOKEN=your_twilio_auth_token
     TWILIO_PHONE_NUMBER=your_twilio_phone_number
     NEXT_PUBLIC_MAP_API_KEY=your_map_api_key
     ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

5. **Access the App**:
   Open `http://localhost:3000` in your browser.

---

## Contributing

Contributions are welcome! If you have suggestions or find issues, feel free to create an issue or submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- Twilio for providing the WhatsApp API integration.
- All developers and contributors who inspired the creation of this project.
