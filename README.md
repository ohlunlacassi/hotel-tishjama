# Hotel Tishjama Service App

## The Hotel Tishjama App offers both service managers and guests ease and convenience when it comes to effortlessly booking, creating, or editing services offered by the hotel.

![HotelTishjama_screenshot1](/Users/sh/Desktop/neue-fische/capstone/hotel-tishjama/images/HotelTishjama_screenshot1.png)

### Description

The app has two different dashboards, one for the service manager, and one for guests. The login process is the same for both: The app asks for an email address and a room number (and does not require guests to memorize or write down _yet another_ password).

Once logged in, the service manager can see the list of services on offer as well as a button which allows for the creation of new services. In the details view of each service, the service manager also has the option to edit or delete the service.

Once logged in, guests also see a list of services on offer, can click into service details pages, and, once there, book that service. Booked services appear in a "My Bookings" list accessible from the user's home page. From the "My Bookings" list, guests can again access the service details page and cancel the booking if necessary.

### Tech Stack

- Front End:
  - React
  - Next.js
  - React Styled Components
- Back End:
  - MongoDB Atlas
  - Mongoose
  - useSWR
  - Cloudinary

### Login Data (for testing purposes):

- Service Manager
  - Email Address: `service-manager@hotel-tishjama.com`
  - Room Number: `666`
- Guest
  - Email Address: `guest1@home.com`
  - Room Number: `101`
