$(".js-example-tokenizer").select2({
    tags: true,
    tokenSeparators: [',', ' ']
});
$('select').select2({
    createTag: function (params) {
        var term = $.trim(params.term);

        if (term === '') {
            return null;
        }

        return {
            id: term,
            text: term,
            newTag: true // add additional parameters
        }
    }
});
$('select').select2({
    createTag: function (params) {
        // Don't offset to create a tag if there is no @ symbol
        if (params.term.indexOf('@') === -1) {
            // Return null to disable tag creation
            return null;
        }

        return {
            id: params.term,
            text: params.term
        }
    }
});
$('select').select2({
    insertTag: function (data, tag) {
        // Insert the tag at the end of the results
        data.push(tag);
    }
});