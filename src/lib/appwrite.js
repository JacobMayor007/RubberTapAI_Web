import { Client, Account} from 'appwrite';





const client = new Client()
  .setEndpoint(import.meta.env.VITE_ENDPOINT)
  .setProject(import.meta.env.VITE_PROJECT_ID);




const account = new Account(client);

export { account, client };
