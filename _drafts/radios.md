@angular 2.0.0-rc.4
@angular/forms 0.2.0

As usual:

    import { disableDeprecatedForms, provideForms } from '@angular/forms';
    
    bootstrap(AppComponent, [
    	disableDeprecatedForms(),
    	provideForms()
    ]);


Template

    <form>
        <input type="radio" [(ngModel)]="sex" name="sex" value="m">male <br>
        <input type="radio" [(ngModel)]="sex" name="sex" value="f">female
    </form>
    
TODO: create a plunker. Add explanation.
