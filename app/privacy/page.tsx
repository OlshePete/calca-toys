import PrivacyPageContent from "@/components/PageContents/PrivacyPageContent";
import { getContacts, getPrivacy } from "@/services/getContent";
import CustomTitle from "@/ui/typographies/CustomTitle";

export default async function PrivacyPage() {
  const response = await getPrivacy()

  const contacts = await getContacts()
  console.log('response',response)
  const title = response.data.attributes.title
  return (
    <div
      className="section  fullH"
      style={{ background: "#FEF7E6", padding: "44px 0" }}
    >
      <PrivacyPageContent
        content={response}
        contacts={contacts}
      >
        <CustomTitle variant={"post_header"} pt={"60px"} pb={"40px"}>{title}</CustomTitle>
      </PrivacyPageContent>
    </div>
  );
}
