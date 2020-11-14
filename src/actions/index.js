export const ADD_FEATURE = "ADD_FEATURE"

export const addFeature = (additionalFeature) => {
    console.log(additionalFeature)
    return {
        type:ADD_FEATURE,
        payload:additionalFeature
    }
}