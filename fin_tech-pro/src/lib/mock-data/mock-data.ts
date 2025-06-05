import { DropdownSectionProps } from "../interface";

export const dropdownSections: DropdownSectionProps[] = [
  {
    title: "Financial Overview",
    items: [
      "Available balance",
      "Monthly savings rate",
      "Net worth summary",
      "Account type and status"
    ]
  },
  {
    title: "Expense Analysis",
    items: [
      "Spending breakdown",
      "Weekly expense chart",
      "Expense categories",
      "Budget warnings"
    ]
  },
  {
    title: "Budgeting and Goals",
    items: ["Budget progress", "Active financial goals"]
  },
  {
    title: "Recent Activity",
    items: ["Recent transactions", "Upcoming bills", "Financial calendar"]
  },
  {
    title: "Alerts and Notifications",
    items: ["Active alerts", "Messages and notifications"]
  },
  {
    title: "Linked Accounts and Integrations",
    items: ["Linked accounts", "External integrations"]
  },
  {
    title: "Settings and Tools",
    items: ["Profile settings", "Report downloads"]
  }
];
