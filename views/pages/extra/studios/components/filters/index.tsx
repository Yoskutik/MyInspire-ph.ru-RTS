import React, { FC } from 'react';
import './style.scss';

interface FiltersProps {
    onChange: (filters: IFilters) => void;
    filters: IFilters;
}

const FilterButton: FC<{onClick: () => void, text?: string, active?: boolean}> = ({ onClick, text, active }) => (
    <span className={active ? 'active' : ''} onClick={onClick}>
        {text}
    </span>
);

const FilterCostButton: FC<{onClick: () => void, by: 'asc' | 'desc', active?: boolean}> = ({ onClick, by, active }) => (
    <span className={`filters__cost ${by} ${active ? 'active' : ''}`} title="Сортировать по увеличению стоимости"
          onClick={onClick}>
        <span />
        <span />
        <span />
    </span>
);

export interface IFilters {
    by?: 'asc' | 'desc';
    furniture?: boolean;
    darkness?: boolean;
}

export const Filters: FC<FiltersProps> = ({ onChange, filters }) => {
    const updateFilters = (newFilters: Partial<IFilters>): void => onChange({
        ...filters,
        ...newFilters,
    });

    return (
        <div className="filters">
            <div style={{ flex: 1 }} />
            <div className="filters__block">
                <FilterCostButton onClick={() => updateFilters({ by: filters.by === 'asc' ? 'desc' : 'asc' })}
                                  by={filters.by ?? 'asc'} active={!!filters.by} />
            </div>
            <div className="filters__block">
                <FilterButton onClick={() => updateFilters({ darkness: null })} text="Все"
                              active={filters.darkness === null}/>
                <FilterButton onClick={() => updateFilters({ darkness: true })} text="Тёмные"
                              active={filters.darkness === true}/>
                <FilterButton onClick={() => updateFilters({ darkness: false })} text="Светлые"
                              active={filters.darkness === false}/>
            </div>
            <div className="filters__block">
                <FilterButton onClick={() => updateFilters({ furniture: null })} text="Все"
                              active={filters.furniture === null}/>
                <FilterButton onClick={() => updateFilters({ furniture: true })} text="Интерьерные"
                              active={filters.furniture === true}/>
                <FilterButton onClick={() => updateFilters({ furniture: false })} text="Неинтерьерные"
                              active={filters.furniture === false}/>
            </div>
        </div>
    );
};
