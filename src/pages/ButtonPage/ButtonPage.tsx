import Button from "../../components/button/Button";
import Icon from "../../components/icon/Icon";
import "./ButtonPage.css";

const ButtonPage = () => {
    return (
        <section className="button__page">
            <div className="button__variant">
                <Button>Hello</Button>
                <Button size="large">
                    <Icon name="github" />
                    Hello
                </Button>
                <Button size="xlarge">
                    <Icon name="github" />
                    Hello
                    <Icon name="github" />
                </Button>
                <Button size="xxlarge">Hello</Button>
                <Button>
                    <Icon name="github" />
                </Button>
            </div>
            <div className="button__variant">
                <Button variant="secondary">Hello</Button>
                <Button
                    variant="secondary"
                    size="large"
                >
                    <Icon name="github" />
                    Hello
                </Button>
                <Button
                    variant="secondary"
                    size="xlarge"
                >
                    <Icon name="github" />
                    Hello
                    <Icon name="github" />
                </Button>
                <Button
                    variant="secondary"
                    size="xxlarge"
                >
                    Hello
                </Button>
            </div>
            <div className="button__variant">
                <Button variant="tertiary">Hello</Button>
                <Button
                    variant="tertiary"
                    size="large"
                >
                    <Icon name="github" />
                    Hello
                </Button>
                <Button
                    variant="tertiary"
                    size="xlarge"
                >
                    <Icon name="github" />
                    Hello
                    <Icon name="github" />
                </Button>
                <Button
                    variant="tertiary"
                    size="xxlarge"
                >
                    Hello
                </Button>
            </div>
        </section>
    );
};

export default ButtonPage;
