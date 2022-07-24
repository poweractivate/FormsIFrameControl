/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    stringProperty: ComponentFramework.PropertyTypes.StringProperty;
    latitudeValue: ComponentFramework.PropertyTypes.FloatingNumberProperty;
    longitudeValue: ComponentFramework.PropertyTypes.FloatingNumberProperty;
}
export interface IOutputs {
    stringProperty?: string;
    latitudeValue?: number;
    longitudeValue?: number;
}
