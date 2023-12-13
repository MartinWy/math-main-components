import { SvgIcon } from 'components/SvgIcon';
import React, { MouseEvent, ReactNode } from 'react';
import styles from './styles.module.scss';


export enum TableActionType {
    red,
    default
}


export class TableItem<DataType> {

    public title: string;
    public subtitle: string;
    public moreText: string;
    public iconName: string;
    public data: DataType;

    constructor(title: string, subtitle: string, moreText: string, iconName: string, data: DataType) {
        this.title = title;
        this.subtitle = subtitle;
        this.moreText = moreText;
        this.iconName = iconName;
        this.data = data;
    }
}

export class TableItemAction<DataType> {

    public title: string
    public iconName: string
    public onClick: (event: MouseEvent<HTMLDivElement>, item: TableItem<DataType>, index: number) => void
    public type: TableActionType = TableActionType.default

    constructor(title: string, iconName: string, type: TableActionType, onClick: (event: MouseEvent<HTMLDivElement>, item: TableItem<DataType>, index: number) => void = () => { }) {
        this.title = title
        this.iconName = iconName
        this.onClick = onClick
        this.type = type
    }
}


export function Table<DataType>({
    items,
    title = "Titel",
    actions = [],
    moreActions,
    marginTop = 30
}: {
    items: TableItem<DataType>[],
    title: string,
    actions?: TableItemAction<DataType>[],
    moreActions?: ((data: DataType, index: number) => ReactNode)[],
    marginTop?: number
}) {

    return (
        <div className={styles.container} style={{ marginTop: marginTop }}>
            <h3>{title}</h3>
            <ul className={`${styles.item_list} ${items.length > 0 ? styles.has_children : styles.no_children}`}>
                {items.map((item, index) =>
                    <li key={index} className={styles.item}>
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
                                    action.type == TableActionType.red && styles.red,
                                    action.type == TableActionType.default && styles.default,
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