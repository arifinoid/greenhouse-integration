# Greenhouse Integration - Mini Project

This is a mini project that integrates with the Greenhouse ATS (Applicant Tracking System). It allows users to submit job applications and view submitted applications through a simple UI. The project is built using Next.js, TypeScript, and ShadCN UI.

## Features

- Submit a job application to Greenhouse.
- Admin view to see submitted applications.
- Responsive UI built using ShadCN UI components.
- API integration with Greenhouse ATS for candidate submission and retrieval of job applications.

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **UI Components**: ShadCN UI, Tailwind CSS
- **HTTP Client**: Axios

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- Yarn or npm (v6+)
- [Greenhouse API Key](https://developers.greenhouse.io/harvest.html)

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/greenhouse-integration.git
   cd greenhouse-integration
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Create a `.env.local` file in the root of the project and add your Greenhouse API key:

   ```bash
   GREENHOUSE_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### API Endpoints

- `GET /api/applications`: Fetches applications from Greenhouse.
- `POST /api/submit`: Submits a candidate's application to Greenhouse.
- `GET /api/jobs`: Fetches all available jobs from Greenhouse.
- `GET /api/jobs/[id]`: Fetches details for a specific job from Greenhouse.
- `GET /api/candidates`: Fetches all candidates from Greenhouse.

### Deployment

The app is hosted on [Vercel](https://vercel.com). To deploy your own version:

1. Create a Vercel account and link your GitHub repository.
2. Set up your environment variables in the Vercel dashboard (`GREENHOUSE_API_KEY`).
3. Deploy the app.

### Project Structure

```bash
.
├── app           # Next.js app containing pages, apis, etc
├── components    # Reusable components either from ShadCN UI or feature-specific
├── hooks         # Custom hooks
├── lib           # Custom utilities
└── README.md     # Project documentation
```

## Usage

### Submit a Job Application

- Navigate to the home page.
- Fill out the form with personal details and submit your application.
- The application will be submitted to the Greenhouse API.

### Admin View

- Visit `/admin` to see a list of submitted applications.
- Pagination is available to load more applications.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or need further assistance, feel free to reach out!
