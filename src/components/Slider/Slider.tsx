import React, { useState } from 'react';
import styles from './styles.module.scss';

export class SliderCard {
    title: string
    description: string

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
}

export function Slider({
    cards
}: {
    cards: SliderCard[]
}) {

    const [selected, setSelected] = useState(0)

    return (
        <div className={styles.container}>
            {cards.map((card: SliderCard, index: number) =>
                <div key={index} className={[styles.card, selected == index ? styles.selected : styles.not_selected].join(" ")}>
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                </div>
            )}
        </div>
    )
}