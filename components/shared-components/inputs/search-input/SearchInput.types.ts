

export interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch?: () => void;
    searchVariant?: "one" | "two";
    classes?: string;
    }