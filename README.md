## Deployment on Vercel

Vercel is an excellent platform for deploying React applications with zero-configuration and automatic scaling. Follow these steps to deploy the iBOX TV Frontend on Vercel:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/manybotts/iboxtv-frontend)

1. **Push Your Code to GitHub:**  
   Ensure your iBOX TV Frontend repository is pushed to GitHub.

2. **Create a Vercel Account:**  
   If you don't already have one, sign up at [Vercel](https://vercel.com).

3. **Import Your Repository:**  
   - Log in to your Vercel dashboard.
   - Click on the "New Project" button.
   - Select your iBOXTV-frontend repository from GitHub.
   - Vercel will automatically detect that you're using React and apply the default build settings.

4. **Configure Environment Variables:**  
   - In your Vercel project settings, navigate to the "Environment Variables" section.
   - Add a new environment variable:  
     - **Name:** `REACT_APP_BACKEND_URL`  
     - **Value:** The URL of your deployed backend (e.g., `https://api.iBOXTV.site` or your Heroku URL)  
   - This variable ensures that your React app correctly points to your backend.

5. **Deploy the Project:**  
   - Once imported, Vercel will start building your project automatically.
   - You can monitor the build process in the Vercel dashboard.
   - After the build is successful, your project will be live. Vercel assigns a URL (e.g., `https://your-project-name.vercel.app`) where your app is hosted.

6. **Custom Domain Setup (Optional):**  
   - If you want to use a custom domain (e.g., **iBOXTV.site**), go to your Vercel project settings under the "Domains" section.
   - Add your custom domain and follow Vercel's instructions to update your DNS records with your domain registrar.
   - Once the DNS changes propagate, your app will be accessible via your custom domain.

7. **One-Click Deployment Button (Optional):**  
   You can also add a one-click deployment button in your README.md for others to deploy your project easily. For example:
   ```markdown
   [![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/manybotts/iboxtv-frontend)
