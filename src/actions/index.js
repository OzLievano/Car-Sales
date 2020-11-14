export const ADD_FEATURE = "ADD_FEATURE"

export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = (additionalFeature) => {
    console.log(additionalFeature)
    return {
        type:ADD_FEATURE,
        payload:additionalFeature
    }
}

export const removeFeature = (featureName) => {
    return {
        type:REMOVE_FEATURE,
        payload:featureName
    }
}