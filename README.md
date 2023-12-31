# Solidarity: Decentralized Crowdfunding App

Solidarity is a decentralized crowdfunding platform that leverages the Ethereum blockchain, utilizing Solidity for smart contracts and Next.js for the front-end. The goal is to simplify crowdfunding, enabling users to effortlessly create campaigns and raise funds for their projects, causes, or initiatives.

## Features

- **Decentralized Crowdfunding:** Solidarity eliminates intermediaries, allowing users to create campaigns without relying on traditional financial institutions.

- **Security:** Smart contracts ensure secure and transparent transactions, managing all funds securely on the Ethereum blockchain.

- **Next.js Front-end:** A fast and efficient front-end provides a seamless user experience, designed to be responsive and user-friendly.

- **Campaign Creation:** Users can easily create crowdfunding campaigns, specifying details such as the fundraising goal, campaign duration, and a compelling project description.

- **Contribution Handling:** Contributors can browse campaigns, contribute funds, and track progress. Smart contracts handle fund distribution according to predefined rules.

- **Token Integration:** Solidarity may incorporate a custom ERC-20 token, enhancing platform functionality with additional features and benefits.

## Getting Started

Follow these steps to run Solidarity locally:

Follow these steps to run Solidarity locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/solidarity.git
2. **Install Dependancies**
   ```bash
       cd solidarity
       npm install
3. Set up a local Ethereum development environment or connect to an existing Ethereum network.
  **Configure Environment Variables**
    Create a .env file in the project root with the following content:
   ```bash  
        NEXT_PUBLIC_INFURA_API_KEY=your_infura_api_key
        NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
4. **Run the Application**
   ```bash
     npm run dev
The application should now be accessible at [http://localhost:3000](http://localhost:3000).


