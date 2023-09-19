import ContentContainer from "@/components/ContentContainer/ContentContainer";
import Image from "next/image";
import oformlenie from "../public/oformlenie.png";
import CustomStack from "@/components/CustomStack/CustomStack";
import CustomTitle from "@/ui/Typography/CustomTitle";
import CustomText from "@/ui/Typography/CustomText";
import CustomButton from "@/ui/Buttons/CustomButton";
import MainCarousel from "@/components/Carousels/MainCarousel";

export default function Home() {
  return (
    <main>
      <div className="section fullH" style={{}}>
        <MainCarousel/>
        {/* <div className={"bgWrap"}>
          <Image
            alt="oformlenie"
            src={oformlenie}
            placeholder="blur"
            style={{
              objectFit: "cover",
              height: "100vh",
            }}
          />
        </div> 
        <ContentContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding:"0 100px",
              height: "100vh",
            }}
          >
            <CustomStack variant="column" gap={76} >
            <CustomStack variant="column" gap={17} >
            <CustomStack variant="column" gap={0}>
              <CustomTitle fontSize={70}>Оформление</CustomTitle>
              <CustomTitle fontSize={44}>надувными шарами</CustomTitle>
            </CustomStack>

            <CustomText>Широкий выбор оформления праздника для вашего ребенка</CustomText>
            </CustomStack>
            <CustomButton
            label="выбрать"
            variant="solid"
            width={200}
            />
            </CustomStack>
          </div>
        </ContentContainer>*/}
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>Хит продаж</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>оформление шарами</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>НАДУЕМ ваши</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>игрушки</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>Акционные предложения</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>Подарочная упаковка</p>
      </div>
      <div className="section" style={{ background: "green" }}>
        <p>подпишись на нас @vellum.paper</p>
      </div>
    </main>
  );
}
