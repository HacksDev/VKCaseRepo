const modal = (
    <ModalRoot activeModal={activeModal} >
        <ModalPage id="photograhper"
            onClose={closeModal}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={closeModal}><Icon24Cancel /></PanelHeaderButton>}
                >Фотограф</ModalPageHeader>
            }
        >
            <Photograhper isActive={true}></Photograhper>
        </ModalPage>
        <ModalPage id="time"
            onClose={closeModal}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={closeModal}><Icon24Cancel /></PanelHeaderButton>}
                >Выберите время съемки</ModalPageHeader>}>
            <FormLayoutGroup>
                <Radio name="sex" defaultChecked>5 минут</Radio>
                <Radio name="sex" >15 минут</Radio>
                <Radio name="sex" >30 минут</Radio>
                <Radio name="sex" >1 час</Radio>
            </FormLayoutGroup>
            <Div>
                <Button size="xl" onClick={changeModal} data-modal="search">Начать поиск</Button>
            </Div>
        </ModalPage>
        <ModalPage id="search"
            onClose={closeModal}
            header={
                <ModalPageHeader
                    left={<PanelHeaderButton onClick={closeModal}><Icon24Cancel /></PanelHeaderButton>}
                >Поиск фотографа</ModalPageHeader>}>
            <Group>
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={64} src={phgrProgile} />}
                    text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                    after={<Button mode="commerce">Принять</Button>}
                    caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                    <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                </RichCell>
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={64} src={phgrProgile} />}
                    text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                    after={<Button mode="commerce">Принять</Button>}
                    caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                    <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                </RichCell>
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={64} src={phgrProgile} />}
                    text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                    after={<Button mode="commerce">Принять</Button>}
                    caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                    <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                </RichCell>
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={64} src={phgrProgile} />}
                    text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                    after={<Button mode="commerce">Принять</Button>}
                    caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                    <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                </RichCell>
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={64} src={phgrProgile} />}
                    text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                    after={<Button mode="commerce">Принять</Button>}
                    caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                    <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                </RichCell>
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={64} src={phgrProgile} />}
                    text={<Label icon={<Icon24Favorite width={16} fill={"#FFA000"} />} text="4.7"></Label>}
                    after={<Button mode="commerce">Принять</Button>}
                    caption={<Label icon={<Icon28TagOutline width={16} />} text="200 ₽/час"></Label>}>
                    <Label icon={<Icon16Place fill={"#99A2AD"} />} text="Илья Гришин"></Label>
                </RichCell>
                
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>



            </Group>
        </ModalPage>

    </ModalRoot>
);