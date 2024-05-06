import { useState } from "react";
import { InnerLayout, MainLayout } from "../Styles/Layout";
import Title from "../Title/Title";
import portfolios from "../Json/JsonPortfolios"
import Button from "../Btn/PortfoliosBtn/BtnPortfolios"
import Menu from "../Menu/Menu";
const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

const Portfolios=() =>{
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>

                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default Portfolios;