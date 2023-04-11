import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Summarize key E-Series Terminology?",
        value: "Summarize key E-Series Terminology?"
    },
    { text: "What are supported adjustable support rails for a controller-drive tray?", value: "What are supported adjustable support rails for a controller-drive tray?" },
    { text: "What are a few upgrade considerations before upgrading controllers?", value: "What are a few upgrade considerations before upgrading controllers?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
