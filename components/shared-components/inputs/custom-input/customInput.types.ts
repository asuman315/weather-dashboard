
export interface InputFieldItemsProps {
   inputFieldItems: InputFieldProps[];
   onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};


export interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number' | 'password';
    error?: string;
    disabled?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    className?: string;
    id?: string;
    name?: string;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    readOnly?: boolean;
    autoComplete?: string;
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    step?: number;
    min?: number;
    max?: number;
    list?: string;
    form?: string;
    multiple?: boolean;
    accept?: string;
    capture?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onDoubleClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onContextMenu?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void;
    onDrag?: (e: React.DragEvent<HTMLInputElement>) => void;
    onDragEnd?: (e: React.DragEvent<HTMLInputElement>) => void;
    onDragEnter?: (e: React.DragEvent<HTMLInputElement>) => void;
    onDragExit?: (e: React.DragEvent<HTMLInputElement>) => void;
    onDragLeave?: (e: React.DragEvent<HTMLInputElement>) => void;
    onDragOver?: (e: React.DragEvent<HTMLInputElement>) => void;
    onDragStart?: (e: React.DragEvent<HTMLInputElement>) => void;
    onDrop?: (e: React.DragEvent<HTMLInputElement>) => void;
    onPointerDown?: (e: React.PointerEvent<HTMLInputElement>) => void;
    onPointerMove?: (e: React.PointerEvent<HTMLInputElement>) => void;
};