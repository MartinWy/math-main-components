import { SvgIcon } from 'components/SvgIcon';
import React, { MouseEvent, ReactNode } from 'react';
import styles from './styles.module.scss';


export type TableActionType = "red" | "default"


export type TableItem<DataType> = {
    title: string;
    subtitle: string;
    moreText: string;
    iconName: string;
    data: DataType;
}

export type TableItemAction<DataType> = {
    title: string
    iconName: string
    onClick: (event: MouseEvent<HTMLDivElement>, item: TableItem<DataType>, index: number) => void
    type: TableActionType
}


export function Table<DataType>({
    items,
    title = "Titel",
    actions = [],
    moreActions,
    selected,
    marginTop = 30
}: {
    items: TableItem<DataType>[],
    title: string,
    selected?: number,
    actions?: TableItemAction<DataType>[],
    moreActions?: ((data: DataType, index: number) => ReactNode)[],
    marginTop?: number
}) {

    return (
        <div className={styles.container} style={{ marginTop: marginTop }}>
            <h3>{title}</h3>
            <ul className={`${styles.item_list} ${items.length > 0 ? styles.has_children : styles.no_children}`}>
                {items.map((item, index) =>
                    <li key={index} className={[styles.item, selected == index ? styles.selected : styles.not_selected].join(" ")}>
                        <div className={styles.icon}>
                            <SvgIcon iconName={item.iconName} />
                        </div>
                        <div className={styles.title}>
                            {item.title}
                        </div>
                        <div className={styles.moreText}>
                            {item.moreText}
                        </div>
                        <div className={styles.subtitle}>
                            {item.subtitle}
                        </div>
                        {moreActions &&
                            moreActions.map((moreAction, index) =>
                                <div className={styles.more_action} key={item.title + index}>
                                    {moreAction(item.data, index)}
                                </div>
                            )
                        }
                        {actions.length > 0 && actions.map((action, idx) =>
                            <div
                                key={idx}
                                className={[
                                    styles.action,
                                    action.type === "red" && styles.red,
                                    action.type === "default" && styles.default,
                                ].join(" ")}
                                onClick={(event) => action.onClick(event, item, index)}>
                                <SvgIcon iconName={action.iconName} />
                                {action.title}
                            </div>
                        )}
                    </li>
                )}
            </ul>
        </div>
    )
}