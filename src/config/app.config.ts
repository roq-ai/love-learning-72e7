interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Student'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Content Creator', 'Student', 'Guest User', 'Story Teller'],
  tenantName: 'Startup',
  applicationName: 'love learning',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage own user information', 'View lessons', 'View lesson content', 'Track progress on lessons'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b6720517-7c98-48cd-8d52-5f7e08ae4289',
};
