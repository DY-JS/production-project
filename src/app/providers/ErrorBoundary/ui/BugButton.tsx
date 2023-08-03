import React, { useEffect, useState } from 'react'
import { Button } from '../../../../shared/ui/Button'

export const BugButton = () => {
    const [er, setEr] = useState(false)

    const onError = () => {
        setEr(true)
    }

    useEffect(() => {
        if (er) {
      throw new Error('Error occurred in BugButton component.')
        }
    }, [er])

    return (
      <Button onClick={onError}>
            Throw Error
      </Button>
    );
}
