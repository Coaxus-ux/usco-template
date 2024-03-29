import { Component, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
    selector: 'hlm-skeleton',
    standalone: true,
    template: ``,
    host: {
        '[class]': '_computedClass()',
    },
})
export class HlmSkeletonComponent {
    private readonly _userCls = signal<ClassValue>('');
    @Input()
    set class(userCls: ClassValue) {
        this._userCls.set(userCls);
    }

    protected _computedClass = computed(() => this._generateClass());
    private _generateClass() {
        return hlm('block animate-pulse rounded-md bg-muted', this._userCls());
    }
}
